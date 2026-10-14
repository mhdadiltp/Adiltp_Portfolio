#!/usr/bin/env python3
"""
High-Performance Local Development Server with HTTP 206 Partial Content (Byte Range) Support
Ensures smooth video seeking, instant playback in Safari, Chrome, Firefox, and mobile browsers.
"""
import os
import sys
import mimetypes
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

class RangeHTTPRequestHandler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def end_headers(self):
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Cache-Control', 'no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()

        ctype = self.guess_type(path)
        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(404, "File not found")
            return None

        fs = os.fstat(f.fileno())
        total_size = fs[6]

        range_header = self.headers.get('Range')
        if not range_header or not range_header.startswith('bytes='):
            self.send_response(200)
            self.send_header("Content-Type", ctype)
            self.send_header("Content-Length", str(total_size))
            self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
            self.end_headers()
            return f

        try:
            range_spec = range_header.strip().split('=')[1]
            parts = range_spec.split('-')
            start_str, end_str = parts[0].strip(), parts[1].strip()

            if start_str and end_str:
                start = int(start_str)
                end = int(end_str)
            elif start_str:
                start = int(start_str)
                end = total_size - 1
            elif end_str:
                start = total_size - int(end_str)
                end = total_size - 1
            else:
                start = 0
                end = total_size - 1

            if start >= total_size or end >= total_size or start > end:
                self.send_response(416)
                self.send_header("Content-Range", f"bytes */{total_size}")
                self.end_headers()
                f.close()
                return None

            length = end - start + 1
            self.send_response(206)
            self.send_header("Content-Type", ctype)
            self.send_header("Content-Range", f"bytes {start}-{end}/{total_size}")
            self.send_header("Content-Length", str(length))
            self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
            self.end_headers()
            f.seek(start)

            class LimitedFile:
                def __init__(self, file_obj, max_bytes):
                    self.f = file_obj
                    self.remaining = max_bytes

                def read(self, size=-1):
                    if self.remaining <= 0:
                        return b''
                    if size < 0 or size > self.remaining:
                        size = self.remaining
                    data = self.f.read(size)
                    self.remaining -= len(data)
                    return data

                def close(self):
                    self.f.close()

            return LimitedFile(f, length)
        except Exception as e:
            self.send_error(500, f"Range processing error: {e}")
            f.close()
            return None

def run(port=4173):
    mimetypes.init()
    mimetypes.add_type('video/mp4', '.mp4')
    mimetypes.add_type('video/quicktime', '.mov')
    mimetypes.add_type('video/x-m4v', '.m4v')
    mimetypes.add_type('image/jpeg', '.jpg')
    mimetypes.add_type('image/jpeg', '.jpeg')
    mimetypes.add_type('image/png', '.png')
    mimetypes.add_type('image/svg+xml', '.svg')
    mimetypes.add_type('application/json', '.json')

    server_address = ('0.0.0.0', port)
    httpd = ThreadingHTTPServer(server_address, RangeHTTPRequestHandler)
    print(f"Server with Range & Video Seeking active on http://localhost:{port}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()

if __name__ == '__main__':
    p = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
    run(p)

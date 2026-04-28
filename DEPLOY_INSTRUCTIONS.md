# 🚀 Synkloom Deployment Instructions

To ensure your site deploys correctly and all old files are replaced, follow these steps:

## 1. Prepare the Build
Run the following command in your terminal:
```bash
npm run build:static
```
This will:
1. Delete your old `dist` and `dist-static` folders.
2. Generate a fresh production-ready build in the `dist-static` folder.

## 2. Server Upload (cPanel / Apache)
1. Log into your server via **FTP** or **cPanel File Manager**.
2. Navigate to your website's root directory (usually `public_html`).
3. **CRITICAL**: Delete any existing files in `public_html` before uploading (except for system folders like `.well-known`).
4. Upload all files and folders **INSIDE** the local `dist-static` folder to the server's `public_html`.

## 3. Important Notes
- **cgi-bin**: Do NOT put your files in this folder. It is for server scripts only.
- **.htaccess**: We have already included a `.htaccess` file in the `public` folder, so it will be automatically included in your build. This handles your page routing.
- **Build Folder**: Always use `dist-static` for static hosting.

---
*Created by Antigravity*

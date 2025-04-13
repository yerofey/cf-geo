# 🌍 CF Geo API

A simple Cloudflare Worker that returns basic geolocation and request metadata based on headers injected by Cloudflare.

This lightweight API is useful for detecting the user's country, IP address, language, and user-agent — without relying on external geolocation services.

---

## 🛰️ Response Example

```json
{
 "country": "Unknown",
 "ip": "Unknown",
 "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
 "language": "en-US,en;q=0.8"
}
```

## 📦 How It Works

This Worker reads the following headers:

| Field     | Source Header    | Description                               |
| --------- | ---------------- | ----------------------------------------- |
| country   | CF-IPCountry     | The country code of the requestor.        |
| ip        | CF-Connecting-IP | The IP address of the requestor.          |
| userAgent | User-Agent       | The user agent string of the requestor.   |
| language  | Accept-Language  | The preferred languages of the requestor. |

If Cloudflare is not injecting headers (e.g., local dev), values will default to `Unknown`.

---

## 🚀 Deployment

1. Install dependencies:

```bash
bun i
```

2. Preview locally:

```bash
bun dev
```

3. Deploy to Cloudflare:

```bash
bun publish
```

## 🔐 CORS

This API is configured to allow CORS requests from any origin. If you want to restrict access, modify the `Access-Control-Allow-Origin` header in the response.

## 💡 Use Cases

- Detect user region and choose backend API
- Localize frontend content based on country/language
- Log anonymous request info for analytics
- Light alternative to IP geolocation APIs

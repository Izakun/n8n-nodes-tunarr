# n8n-nodes-tunarr

[![npm version](https://img.shields.io/npm/v/n8n-nodes-tunarr.svg)](https://www.npmjs.com/package/n8n-nodes-tunarr)

n8n community node for [Tunarr](https://tunarr.com/) — create IPTV channels from your media library — via its API.

Install via **Settings -> Community Nodes -> Install** -> `n8n-nodes-tunarr`.

## Operations
- Get Channels, Get Version

## Credentials
Configure the base URL and authentication in the **Tunarr API** credential.

## Usage example

List IPTV channels:

1. Add the node after a trigger (e.g. *When clicking 'Test workflow'*).
2. Select your credential.
3. **Get Channels**.
4. Execute the node — example output:

```json
{ "id": "9c...", "number": 1, "name": "Movies 24/7", "programCount": 320 }
```

## Disclaimer
Not affiliated with or endorsed by the respective project.

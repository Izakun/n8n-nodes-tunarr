<img src="nodes/Tunarr/tunarr.svg" width="90" align="right" alt="Tunarr" />

# n8n-nodes-tunarr

[![npm version](https://img.shields.io/npm/v/n8n-nodes-tunarr.svg)](https://www.npmjs.com/package/n8n-nodes-tunarr)
[![npm downloads](https://img.shields.io/npm/dm/n8n-nodes-tunarr.svg)](https://www.npmjs.com/package/n8n-nodes-tunarr)
[![License: MIT](https://img.shields.io/npm/l/n8n-nodes-tunarr.svg)](./LICENSE)

Community node for **n8n** to interact with **Tunarr**. It lets you automate
Tunarr directly from your n8n workflows using a secure stored credential.

> 🟡 **Community node** — submitted to n8n for verification (review in progress).
> Until it is approved, install it as a community node (below).

## Installation

In n8n, go to **Settings → Community Nodes → Install** and enter `n8n-nodes-tunarr`.
Once it passes n8n's verification it will also be available directly from the **+ (Add node)** panel.

## Operations

| Operation | Description |
|---|---|
| **Get Channels** | Get many channels |
| **Get Version** | Get the server version |

## Authentication

This node uses the **Tunarr API** credential. In n8n, go to **Credentials → New**, pick
**Tunarr API**, and fill in:

- **Base URL** — the address of your instance, e.g. `http://tunarr:8000` (no trailing slash).

No extra authentication headers are required.

**Where to find it:** See the service documentation: https://tunarr.com/

The credential's **Test** button verifies the connection before you save.

## Usage

1. Add the **Tunarr** node to a workflow (after a trigger such as *When clicking 'Test workflow'* or a Schedule Trigger).
2. Select your **Tunarr API** credential.
3. Pick an **Operation** and run the workflow — the response is returned as JSON for the next node.

## Compatibility

Requires n8n **1.0** or newer. Built and linted with the official `@n8n/node-cli`, and
published to npm with a build-provenance attestation.

## Resources

- [Tunarr](https://tunarr.com/)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)

## License

[MIT](./LICENSE)

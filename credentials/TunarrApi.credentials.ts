import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class TunarrApi implements ICredentialType {
	name = 'tunarrApi';

	displayName = 'Tunarr API';

	icon = 'file:tunarrApi.svg' as const;

	documentationUrl = 'https://tunarr.com/';

	// Tunarr's API is unauthenticated by default; only the base URL is needed.
	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'http://tunarr:8000',
			required: true,
			description: 'Base URL of the Tunarr instance (e.g. http://tunarr:8000). No trailing slash.',
		},
	];

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/api/version',
		},
	};

	// No transport auth to inject here (handled inside the node); this block
	// lets the node use httpRequestWithAuthentication.
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {},
	};
}

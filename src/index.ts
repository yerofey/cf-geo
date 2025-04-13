/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request: Request): Promise<Response> {
		const headers = request.headers;

		const country = headers.get('cf-ipcountry') || 'Unknown';
		const ip = headers.get('cf-connecting-ip') || 'Unknown';
		const ua = headers.get('user-agent') || 'Unknown';
		const lang = headers.get('accept-language') || 'Unknown';

		return new Response(JSON.stringify({
			country,
			ip,
			userAgent: ua,
			language: lang
		}), {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
		});
	},
} satisfies ExportedHandler<Env>;

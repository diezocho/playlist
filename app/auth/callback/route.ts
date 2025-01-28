import { put } from "@vercel/blob";
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_BFgYzbSgT2wPy0Rx_Jk6sFwkF1TngnmdDKvPBoZLepvFLJE"
const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });

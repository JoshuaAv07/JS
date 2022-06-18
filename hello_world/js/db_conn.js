// DB CONNECTION
import { connect } from 'mongoose';
const connect = require('mongoose');

main().catch(err => console.log(err));

const user = '';
const password = '';
const uri = '';

async function main() {
    await connect('mongodb://localhost:27017/quotations');
}
    then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

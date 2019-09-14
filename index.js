#!/usr/bin/env node
const file = require( 'fs' ).readFileSync
const { join } = require( 'path' )
require( 'console-png' ).attachTo( console ) // Attach console.png to the console
console.png( file( join( __dirname, '/meme.png' ) ) )

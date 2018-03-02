#!/usr/bin/env node

import { write } from 'fs';

const userInput = process.argv[2] ? process.argv[2].parseInt() : null;
const { Writable } = require('stream');
const writeStream = Writable();

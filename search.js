#!/usr/bin/env node

require('rxjs/add/operator/do');
const { argv } = require('yargs');
const find = require('asciilib/find');

const { query } = argv;

const toJSON = x => JSON.stringify(x, null, 8);

find(query)
  .map(x => ({
    title: x.entry,
    subtitle: x.name,
    arg: x.entry,
  }))
  .toArray()
  .subscribe(
    items => process.stdout.write(toJSON({ items })),
    err => process.stdout.write(toJSON({
      items: [
        {
          title: 'Error',
          subtitle: err.message,
          arg: null,
        },
      ],
    }))
  );

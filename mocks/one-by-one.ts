import { Text, ValueJSON } from 'slate';

export default {
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          Text.create(
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          ).toJSON(),
        ],
      },
      {
        object: 'block',
        type: 'table',
        nodes: [
          {
            object: 'block',
            type: 'table_row',
            nodes: [
              {
                object: 'block',
                type: 'table_cell',
                nodes: [
                  {
                    object: 'block',
                    type: 'table_content',
                    nodes: [Text.create('0').toJSON()],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
} as ValueJSON;
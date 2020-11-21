/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const getCSSModuleLocalIdent = require('../getCSSModuleLocalIdent');

const rootContext = '/path';
const defaultClassName = 'class';
const options = { context: undefined, hashPrefix: '', regExp: null };

const tests = [
  {
    resourcePath: '/path/to/file.module.css',
    expected: '13tFDX',
  },
  {
    resourcePath: '/path/to/file.module.scss',
    expected: '3lYUIp',
  },
  {
    resourcePath: '/path/to/file.module.sass',
    expected: '2KnOBn',
  },
  {
    resourcePath: '/path/to/file.name.module.css',
    expected: '1OzEhN',
  },
];

describe('getCSSModuleLocalIdent', () => {
  tests.forEach(test => {
    const { className = defaultClassName, expected, resourcePath } = test;
    it(JSON.stringify({ resourcePath, className }), () => {
      const ident = getCSSModuleLocalIdent(
        {
          resourcePath,
          rootContext,
        },
        '[hash:base64]',
        className,
        options
      );
      expect(ident).toBe(expected);
    });
  });
});

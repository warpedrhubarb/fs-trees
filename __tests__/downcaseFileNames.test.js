import _ from 'lodash';
import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import downcaseFileNames from '../src/downcaseFileNames';

describe('should', () => {
  test('be immutable', () => {
    const node = mkdir('/', [
      mkdir('eTc', [
        mkdir('NgiNx'),
        mkdir('CONSUL', [
          mkfile('config.json'),
        ]),
      ]),
      mkfile('hOsts'),
    ]);
    const original = _.cloneDeep(node);

    downcaseFileNames(node);

    expect(node).toEqual(original);
  });

  test('downcase file names', () => {
    const node = mkdir('/', [
      mkdir('eTc', [
        mkdir('NgiNx'),
        mkdir('CONSUL', [
          mkfile('config.JSON'),
        ]),
      ]),
      mkfile('hOsts'),
    ]);
    const actual = downcaseFileNames(node);

    const expected = {
      children: [
        {
          children: [
            {
              name: 'NgiNx',
            },
            {
              children: [{ name: 'config.json' }],
              name: 'CONSUL',
            },
          ],
          name: 'eTc',
        },
        { name: 'hosts' },
      ],
      name: '/',
    };

    expect(actual).toMatchObject(expected);
  });

  test('return full copy', () => {
    const node = mkdir('/', [
      mkdir('eTc', [
        mkdir('NgiNx', [], { size: 4000 }),
        mkdir('CONSUL', [
          mkfile('config.JSON', { uid: 0 }),
        ]),
      ]),
      mkfile('hOsts'),
    ]);
    const actual = downcaseFileNames(node);

    const expected = {
      children: [
        {
          children: [
            {
              meta: { size: 4000 },
              name: 'NgiNx',
            },
            {
              children: [{ meta: { uid: 0 }, name: 'config.json' }],
              name: 'CONSUL',
            },
          ],
          name: 'eTc',
        },
        { name: 'hosts' },
      ],
      meta: {},
      name: '/',
    };

    expect(actual).toMatchObject(expected);
  });
});

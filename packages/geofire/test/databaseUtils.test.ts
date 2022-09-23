import * as chai from 'chai';
import { GeoFire } from '../src';
import {
  afterEachHelper,
  beforeEachHelper,
  geoFireRef,
  invalidFirebaseRefs,
} from './common';
import { getCustomData } from '../src/databaseUtils';
import { DataSnapshot } from 'firebase/database';

const expect = chai.expect;

describe('databaseUtils Tests:', () => {
  // Reset the Firebase before each test
  beforeEach((done) => {
    beforeEachHelper(done);
  });

  afterEach((done) => {
    afterEachHelper(done);
  });

  describe('getCustomData:', () => {
    it('Returns custom data only', () => {
      const data = {
        key1: 'KEY_ONE',
        key2: 'KEY_TWO',
        key3: {
          key4: 'KEY_FOUR',
        },
      }

      const mockSnapshot = {
        val: () => ({
          g: 'geohash',
          l: [1, 2],
          data,
        }),
      };
      expect(getCustomData(mockSnapshot as any)).to.eql({ data });
    });
  });
});

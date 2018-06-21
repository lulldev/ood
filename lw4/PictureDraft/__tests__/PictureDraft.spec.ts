import {Client} from '../src/picture-draft/Client';
import {Designer} from '../src/picture-draft/Designer';

describe('PictureDraft', () => {

  describe('Client', () => {

    it('Falsy client name must throw', () => {
      expect(() => new Client(undefined)).toThrow('Name must be no-empty string');
      expect(() => new Client(null)).toThrow('Name must be no-empty string');
    });

    it('Empty string client name must throw', () => {
      expect(() => new Client('')).toThrow('Name must be no-empty string');
    });

    it('Client name can get by method', () => {
      const client = new Client('Ivan');
      expect(client.GetName()).toEqual('Ivan');
    });
  });

  describe('Designer', () => {

    it('Designer init without arguments', () => {
      expect(() => new Designer()).not.toThrow();
    });

  });

});

import { ConvertToSpacesPipe } from "./convert-to-spaces.pipe";

describe('ConvertToSpacesPipe', () => {
    let pipe: ConvertToSpacesPipe;

    beforeEach(() => {
        pipe = new ConvertToSpacesPipe();
    })

    it('should replace (-) characters to ( ) characters', () => {
        //arrange
        const code: string = 'DLM-54G';
        //act
        const value: string = pipe.transform(code, '-');
        //assert
        expect(value).toEqual('DLM 54G');
    })
})
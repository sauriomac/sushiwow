import { shallowMount, mount } from '@vue/test-utils'
import Cartlistmodal from '@/components/Cartlistmodal'


describe('Cartlistmodal',()=>{

    test('match with snapshot with Cartlistmodal',() => {

        const wrapper = shallowMount( Cartlistmodal)

        expect( wrapper.html() ).toMatchSnapshot()

    })




})
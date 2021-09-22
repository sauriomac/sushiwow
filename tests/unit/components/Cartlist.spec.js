import { shallowMount, mount } from '@vue/test-utils'
import Cartlist from '@/components/Cartlist'


describe('Cartlist',()=>{

    test('would make match with snapshot',() => {

        const wrapper = shallowMount( Cartlist)

        expect( wrapper.html() ).toMatchSnapshot()

    })




})
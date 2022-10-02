import { mount } from '@vue/test-utils'
import Navigation from '../../src/components/Navigation.vue'

describe('Navigation.vue', () => {
  it('renders logo', () => {
    const wrapper = mount(Navigation)
    expect(wrapper.find('#logo').exists()).toBe(true)
  })

  it('renders input', () => {
    const wrapper = mount(Navigation)
    expect(wrapper.find('#myInput').exists()).toBe(true)
  })
})

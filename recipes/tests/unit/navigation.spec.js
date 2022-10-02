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


  it('redirct to random meal', async () => {
    const mockRoute = {
      path: '/meal/:id',
      props: {
        id: 1
      }
    }
    const mockRouter = {
      push: jest.fn()
    }
  
    const wrapper = mount(Navigation, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter
        }
      }
    })
  

    await wrapper.find('#randomRecipe').trigger('click')

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/meal/1')
  })

})

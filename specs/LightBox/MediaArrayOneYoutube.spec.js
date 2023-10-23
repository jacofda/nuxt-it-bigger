import { mount } from '@vue/test-utils'
import LightBox from '@/LightBox'

import { mediaWithOneYoutube } from '../props'

describe('LightBox', () => {
  describe('given one youtube in the media array', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(LightBox, {
        propsData: {
          media: mediaWithOneYoutube
        }
      })
    })

    afterEach(() => {
      wrapper.destroy()
    })

    test('renders one div element with the video-background class', () => {
      expect(wrapper.find('div.video-background').exists()).toBe(true)
    })

    test('renders one iframe element', () => {
      expect(wrapper.find('div.video-background iframe').exists()).toBe(true)
    })

    test('renders one active thumbnail element', () => {
      expect(wrapper.find('div.vib-thumbnail-active').exists()).toBe(true)
    })

    test('the thumbnail has the video icon', () => {
      expect(wrapper.find('div.vib-thumbnail-active svg').exists()).toBe(true)
    })
  })
})
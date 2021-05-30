import Enzyme, { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import Introduction from '../src/components/Introduction'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('displays the introduction text', () => {
  const text = [
    'Welcome to my portfolio.',
    'I am a Junior Software Engineer with passion, ',
    'curiosity and a strong desire to learn. I get excited about ',
    'writing high quality code, practising test driven development, ',
    'and building awesome apps and products.Enjoy looking through ',
    'my work and please feel free to contact me, download my CV or ',
    'checkout my GitHub and linkedIn profiles'
  ].join('')
  const intro = shallow(<Introduction />)
  expect(intro.text()).toEqual(text)
})

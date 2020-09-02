import React from 'react'
import Section from '../components/section'

import towel from '../images/towel.svg'
import towelActive from '../images/towel_2.svg'
import staffUniforms from '../images/uniform.svg'
import staffUniformsActive from '../images/uniform_2.svg'
import fitnessSports from '../images/fitness-and-sports.svg'
import fitnessSportsActive from '../images/fitness-and-sports_2.svg'
import spaSalons from '../images/spa-and-salon-chains.svg'
import spaSalonsActive from '../images/spa-and-salon-chains_2.svg'
import hospitality from '../images/hospitality.svg'
import hospitalityActive from '../images/hospitality_2.svg'

const towelImage = 'https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_922/v1599018372/WashTech/towels-linen_3x.png'
const staffUniformsImage = 'https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_922/v1599018370/WashTech/staff-uniforms_3x.png'
const fitnessSportsImage = 'https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_922/v1599018361/WashTech/fitness-and-sports_3x.png'
const spaSalonsImage = 'https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_922/v1599018360/WashTech/spa-and-salon-chains_3x.png'
const hospitalityImage = 'https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_922/v1599018359/WashTech/hospitality_3x.png'

const items = [{
  label: 'Towels & Linen',
  description: 'We wash towels and fix towels to prolong the lifespan and add unique fragrance. We also offer leasing options on the highest quality towels.',
  icon: towel,
  iconActive: towelActive,
  image: towelImage
}, {
  label: 'Staff Uniforms',
  description: 'Keep your staff and employees motivated and looking professional. We delicately handle your staff uniform and neatly washed, pressed, delivered to your business location.',
  icon: staffUniforms,
  iconActive: staffUniformsActive,
  image: staffUniformsImage
}, {
  label: 'Fitness and Sports',
  description: 'We individually wrap every item without any contact between the items so that customers feel confident to resume their fitness routine.',
  icon: fitnessSports,
  iconActive: fitnessSportsActive,
  image: fitnessSportsImage
}, {
  label: 'Spa and Salon chains',
  description: 'We understand how important the smell and the quality of the towel and other materials in a spa or salon chain are. We work with many spa and salons to add your signature fragrance so that customers can relate to the brand and enhance customer experience.',
  icon: spaSalons,
  iconActive: spaSalonsActive,
  image: spaSalonsImage
}, {
  label: 'Hospitality',
  description: 'Be it hotel pool towel, Lenin, or restaurant, we carefully remove stains and fix items that can prolong the lifespan of your items and deliver on time every day.',
  icon: hospitality,
  iconActive: hospitalityActive,
  image: hospitalityImage
}]

export default function Services () {
  return <Section
    id='services'
    title=''
    heading='Our Services'
    description='We offer a premium solution to carter to the following industries:'
    items={items}
    reverse />
}

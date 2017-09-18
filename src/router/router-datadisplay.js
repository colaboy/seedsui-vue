import IconfontDemo from '@/views/Home/IconfontDemo'
import MarkDemo from '@/views/MarkDemo'
import BadgeDemo from '@/views/BadgeDemo'
import GroupDemo from '@/views/GroupDemo'
import CardDemo from '@/views/CardDemo'
import GridDemo from '@/views/GridDemo'
import CarrouselDemo from '@/views/CarrouselDemo'
import CarrouselPageDemo from '@/views/CarrouselPageDemo'
import ImglazyDemo from '@/views/ImglazyDemo'

export default [
  {
    path: 'iconfontDemo',
    name: 'iconfontDemo',
    component: IconfontDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'markDemo',
    name: 'markDemo',
    component: MarkDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'badgeDemo',
    name: 'badgeDemo',
    component: BadgeDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'groupDemo',
    name: 'groupDemo',
    component: GroupDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'cardDemo',
    name: 'cardDemo',
    component: CardDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'gridDemo',
    name: 'gridDemo',
    component: GridDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'carrouselDemo',
    name: 'carrouselDemo',
    component: CarrouselDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'carrouselPageDemo',
    name: 'carrouselPageDemo',
    component: CarrouselPageDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'imglazyDemo',
    name: 'imglazyDemo',
    component: ImglazyDemo,
    meta: {keepAlive: true}
  }
]

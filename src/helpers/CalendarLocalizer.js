import { dateFnsLocalizer } from 'react-big-calendar';
 import {startOfWeek,parse,format,getDay} from 'date-fns';
import esEs from 'date-fns/locale/en-US'

 export const locales = {
    'es': esEs,
  }


  export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })
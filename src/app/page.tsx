import AlertButton from '../components/section/alertButton';
import {NavigationMenuDemo} from '@/components/section/navbar';
import {CardDemo} from '@/components/section/card';
import {InputWithText} from '@/components/section/Input';


export default function Home() {
  return (
    <div>
        <AlertButton/>
        <NavigationMenuDemo/>
        <CardDemo/>
        <InputWithText/>
    </div>
      
    )
}

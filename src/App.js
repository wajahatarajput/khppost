import './App.css';
import { AppLayout, PostGrid } from './component';
import SignUpForm from './component/AppLayout/SignUp/SignUpForm';

export default function App() {
  
  return (
    <>
      <AppLayout>
      <PostGrid/>
     <SignUpForm/>

      </AppLayout>
    </>
  );
}

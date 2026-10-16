import Dashboard from './dashboard';
import {requireChatGPTUser} from './chatgpt-auth';
export const dynamic='force-dynamic';
export default async function Page(){const u=await requireChatGPTUser('/');return <Dashboard user={{name:u.fullName||'Farhan',email:u.email}}/>;}

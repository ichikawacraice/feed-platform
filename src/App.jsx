import { Header } from './components/Header'
import { Post } from './Post'
import { Sidebar } from './components/Sidebar'


import './global.css'

export function App() {
	return (
		<div>
			<Header />

			<div className='wrapper'>
				<aside>
          <Sidebar />
        </aside>
				<main>
					<Post
						author='Gabriel Ichikawa Craice'
						content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore temporibus omnis consequatur error praesentium consequuntur nisi debitis blanditiis, distinctio earum, perspiciatis sapiente, eius illo. Cupiditate perferendis autem aliquam assumenda perspiciatis.'
					/>
					<Post 
            author='Gabriel Ichikawa Craice' 
            content='Esse é um post muito legal.' 
          />
				</main>
			</div>
		</div>
	)
}

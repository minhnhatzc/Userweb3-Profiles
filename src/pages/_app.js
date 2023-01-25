import 'bootstrap/dist/css/bootstrap.css';
import '../styles/custom.css';
export default function App({ Component, pageProps }) {
  return (
    <div className='backstyle'>


  <Component {...pageProps} />

  </div>
  )
}

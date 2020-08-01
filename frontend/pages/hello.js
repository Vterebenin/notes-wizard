import axios from '../plugins/axios'

function Hello({ message }) {
  return (
    <h1>{message}</h1>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const { data: { message } } = await axios.get('api/v1/')

  return {
    props: {
      message
    }
  }
}

export default Hello

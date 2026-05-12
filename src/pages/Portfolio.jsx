import Navbar from '../components/Navbar'

export default function PortfolioPage() {
  return (
    <div className="page-layout">
      <Navbar />
      <div className="page-content">
        <h1>Portfolio ✧･ﾟ: *✧･ﾟ:*</h1>
        <p></p>
        
        <iframe
          src="/Nicole Ye - Portfolio.pdf"
          width="100%"
          height="800px"
          style={{ border: 'none', borderRadius: '8px' }}
        />

      </div>
    </div>
  )
}
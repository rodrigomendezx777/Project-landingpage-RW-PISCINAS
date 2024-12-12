import { Ellipsis } from 'react-css-spinners'
export default function Loading() {
    return (
      <div style={{ display:"flex", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Ellipsis
          color="rgba(18,76,141,1)"
          size={119}
          />
      </div>
    );
  }
  
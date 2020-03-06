import styled from 'styled-components';

//we don't need vendor prefixes like webkit, styled-components  will d this automatically
const StylePlaylist = styled.div`
  flex: 1 1 450px;
  overflow: hidden;
  color: white;

  @media screen and (max-width: 1400px){
    width: 100%;
    display: block;
  }
  
`

export default StylePlaylist;
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Card = styled.div`
  display: flex;

  width: ${props => props.width};
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.align};
  flex-wrap: wrap;
  background-color: ${props => props.bgColor};
  padding: ${props => props.padding};
  border-style: ${props => props.borderStyle};
  border-color: ${props => props.borderColor};
  border-width: ${props => props.borderWidth};
  border-radius: ${props => props.borderRadius};
  height: ${props => props.height};
`

export const Heading = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: 500;
  font-family: 'Bree serif';
  text-align:${props => props.textalign}
  margin: ${props => props.margin};
`
export const Img = styled.img`
  height: 150px;
  width: 50%;
  text-align: center;
  cursor: pointer;
`
export const Button = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  width: 150px;

  height: 40px;
  border-radius: 10px;
  border-style: none;
  margin: 20px;
  cursor: pointer;
`

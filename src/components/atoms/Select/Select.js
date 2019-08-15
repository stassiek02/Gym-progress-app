import react from 'react';
import styled from 'styled-components';

const Select = styled.select`
    display: block;
    font-size: 16px;
    font-family: 'Montserrat';
    font-weight: 700;
    color: white;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width:100%;
    max-width: 220px;
    box-sizing: border-box;
    margin-bottom:50px;
    border: 0px;
  border-bottom: 3px solid #505158;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    background-image: url('data:image/svg+xml;charset=US-ASCII,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"292.4"%20height%3D"292.4"><path%20fill%3D"%23D94E5B"%20d%3D"M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z"%2F><%2Fsvg>');
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    outline:${({theme})=>theme.secondary};

    option{
        background-color:#44494F;
        outline:none;
    }
   
`
export default Select;
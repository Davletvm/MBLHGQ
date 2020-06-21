import styled from 'styled-components';

export const STATUS_TYPES = {
    RECEIVED: 'received',
    SENT: 'sent',
    DRAFT: 'draft',
};

export const UserSpan = styled.a`
    font-weight: 500;
`

export const DateSpan = styled.a`
    color: grey;
    float: right !important;
    margin-left: 10px;
    padding-left: 10px;
`
import React, { useEffect } from 'react';

import '../../assets/styles/scss/pagination.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUltimatePagination, PaginationComponentProps, ItemTypeToComponent, UltimatePaginationProps } from 'react-ultimate-pagination';

interface IProps {
    pages: number,
    current: number,
    changeCurrentPage: (arg0:number) => void;
}


const Pagination:React.FC<IProps> = (props) => {
    let { current, pages } = props;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.current]);

    const Page =(props:PaginationComponentProps):JSX.Element => (
        <li onClick={props.onClick}
            className={"pagination__number " + (props.isActive ? "pagination__number_active" : "")}>

            {props.value}
        </li>
    );

    const Ellipsis = (props:PaginationComponentProps):JSX.Element => (
        <li className="pagination__dots" onClick={props.onClick}>
            <FontAwesomeIcon icon='ellipsis-h'/>
        </li>
    );

    const PreviousPageLink = (props:PaginationComponentProps):JSX.Element => (
        <li onClick={props.onClick} className="pagination__number">
            <FontAwesomeIcon icon="chevron-left" />
        </li>
    )

    const NextPageLink = (props:PaginationComponentProps):JSX.Element => (
        <li onClick={props.onClick} className="pagination__number">
            <FontAwesomeIcon icon="chevron-right" />
        </li>

    )

    const LastPageLink = (props:PaginationComponentProps):JSX.Element => {
        return <></>
    }

    const FirstPageLink= (props:PaginationComponentProps):JSX.Element => {
        return <></>
    }

    const Wrapper = (props: {children:React.ReactNode}):JSX.Element => {
        return <ul className="pagination">{props.children}</ul>
    }

    const itemTypeToComponent:ItemTypeToComponent = {
        'PAGE': Page,
        'ELLIPSIS': Ellipsis,
        'FIRST_PAGE_LINK': FirstPageLink,
        'PREVIOUS_PAGE_LINK': PreviousPageLink,
        'NEXT_PAGE_LINK': NextPageLink,
        'LAST_PAGE_LINK': LastPageLink
    };

    const UltimatePagination:React.ComponentType<UltimatePaginationProps>  =  createUltimatePagination({itemTypeToComponent, WrapperComponent:Wrapper} );

    return (
        <UltimatePagination
            currentPage={current}
            totalPages={pages}
            onChange={props.changeCurrentPage}
            boundaryPagesRange={1}
            siblingPagesRange={0}
            hideFirstAndLastPageLinks={false}
        />
    )
}

export default Pagination;

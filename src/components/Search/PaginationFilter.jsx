import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {onPageChanged,calcPages } from "../../redux/actions"
import style from '../../css/pagination.module.css'
import styles from '../../css/filters.module.css';

export const pageLimit =10;

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';


class Pagination extends Component{
    
    fetchPageNumbers = () => {
      const totalPages = this.props.totalPages;      
      const currentPage = this.props.currentPage;      
      if (totalPages > 1) {        
        let pages = [];        
        const hasLeftSpill = currentPage===1;        
        const hasRightSpill = totalPages===currentPage;        
        switch (true) {
          case (!hasLeftSpill && hasRightSpill): {          
            pages = [LEFT_PAGE];
            break;
          }
          case (hasLeftSpill && !hasRightSpill): {
            pages = [RIGHT_PAGE];
            break;
          }
          default:{
            pages = [LEFT_PAGE, RIGHT_PAGE];
            break;
          }
        }
        return pages;
      }
    }
    render() {
        const pages = this.fetchPageNumbers();
        const view=[]
        if(this.props.totalRecords.length>0){
            let al,del;
            if(this.props.totalPages===1||this.props.currentPage===this.props.totalPages){
                al= this.props.totalRecords.length
            }else{
                al=this.props.currentPage * pageLimit
            }
            if(this.props.currentPage===1){
                del=1
            }else{
                del= ((this.props.currentPage-1) * pageLimit)+1
            }  
            view.push(`mostrando del ${del} al ${al}`)          
        }  
        return (       
            <Fragment>
            <div className={style.box}>
                <div className={style.data}>
                    <h5>{this.props.totalRecords.length} Resultados</h5>
                    {view && view.map((e,i)=>{
                    return(
                        <span key={i}><h6>{e}</h6></span>
                    )
                    })}
                </div>
                <div>                
                {pages && pages.map((page, index) => {
                    if (page === LEFT_PAGE) return (
                        <button key={index} className={styles.btn}  onClick={this.handleMoveLeft}>&lt;&lt;Anterior</button>
                    );
                    if (page === RIGHT_PAGE) return (
                        <button key={index} className={styles.btn}  onClick={this.handleMoveRight}>Siguiente&gt;&gt;</button>
                    );
                }) }
                </div>                
            </div>
            </Fragment>
        );
    }
    
    componentDidMount() {
      this.gotoPage(1);
    }
    gotoPage = page => {
      const currentPage = page;
      const paginationData = {
        currentPage,
        pageLimit:pageLimit,
      };
     this.props.onPageChanged(paginationData)
    }
    handleMoveLeft = evt => {
      evt.preventDefault();
      this.gotoPage(this.props.currentPage - 1);
    }
    handleMoveRight = evt => {
      evt.preventDefault();
      this.gotoPage(this.props.currentPage + 1);
    }
}
export const mapStateToProps = (state)=>{
  return {
      totalRecords:state.searchResultFilter,
      totalPages:state.totalPages,
      currentPage:state.currentPage
  }
}
export const mapDispatchToProps= (dispatch)=>{
  return{
      onPageChanged:(data)=>dispatch(onPageChanged(data)),
      calcPages:(data)=>dispatch(calcPages(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
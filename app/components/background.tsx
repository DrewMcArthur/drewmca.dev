/** 
 * a component that provides the site's background image
 */

import classNames from "classnames";
import type { ReactNode } from "react";
import { Component } from "react";

type BackgroundProps = { }
type BackgroundState = { 
  loaded: boolean,
  loading_centered: boolean,
}

export default class Background extends Component<BackgroundProps, BackgroundState>
{
  children: ReactNode;

  constructor( props: BackgroundProps )
  {
    super( props );
    this.state = {
      loaded: false,
      loading_centered: true
    }
  }
  
  onload() 
  {
    this.setState( { loaded: true } );
    this.setState( { loading_centered: false } );
  }

  render(): JSX.Element
  {
    const tiny_bg_classnames = classNames({'tiny-bg': true, 'behind': this.state.loaded});
    return (
      <div id='bg_wrapper'>
        <div id='tiny_bg' className={tiny_bg_classnames}></div>
        <div id='bg' className='background'></div>
      </div>
    )
  }
}

import React from 'react';
import {createStyles, Theme, withStyles} from '@material-ui/core'

const useStyles = (theme: Theme) =>
  createStyles({
    mainGrid: {
      marginTop: theme.spacing(0),
    },
    postPaper: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(3),
      background: 'rgba( 255, 255, 255, 0.55 )',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      backdropFilter: 'blur( 8.0px )',
      borderRadius: '10px',
    },
    pageBackground: {
      // backgroundImage: "url('/images/osman-rana-dI9KhXi0ooE-unsplash.jpg')",
      // backgroundRepeat: 'no-repeat',
    },
  });

const Talk = () => (
  <>
    <section className="partial-container" data-partial="introduction">
      <section>
        <h1>Kanban and Beyond</h1>
        <h3>
          10 Components of a great <em>K</em>anban System
        </h3>
        <p>
          <small>
            Created by <a href="http://rogeralmeida.github.io/">Roger Almeida</a> /{' '}
            <a href="http://twitter.com/roger4almeida">@roger4almeida</a>
          </small>
        </p>
      </section>
      {/*<section>*/}
      {/*  <img src="/images/kanban-and-beyond/starbucks.jpeg" style="width: 95%; height: 95%;" />*/}
      {/*</section>*/}

      {/*<section>*/}
      {/*  <img src="/images/kanban-and-beyond/assemblyLine.jpeg" style="width: 85%; height: 85%;" />*/}
      {/*</section>*/}

      {/*<section>*/}
      {/*  <img src="/images/kanban-and-beyond/boing.jpg" style="width: 95%; height: 95%;" />*/}
      {/*</section>*/}
    </section>
  </>
);
export default withStyles(useStyles)(Talk)
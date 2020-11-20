import React from 'react';
import TableComponent from '../../components/table/table.component.jsx';
import Navbar from '../../components/navbar/navbar.component.jsx';
import Footer from '../../components/footer/footer.component.jsx';

function MainPage() {
  return (
    <React.Fragment>
      <html lang="en">
        <Navbar />
        <body>
          <main role="main" class="container">
            <TableComponent />
          </main>
          <Footer />
        </body>
      </html>
    </React.Fragment>
  );
}

export default MainPage;

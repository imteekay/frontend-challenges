import { Container as _Container, Row as _Row, Col as _Col } from 'styled-bootstrap-grid';

/**
 * This grid is based on styled-bootstrap-grid https://github.com/dragma/styled-bootstrap-grid
 */

/** Outer wrapper when using a grid */
export const Container = _Container;
Container.displayName = 'Container';

/** Grid row */
export const Row = _Row;
Row.displayName = 'Row';

/** Grid column */
export const Col = _Col;
Col.displayName = 'Col';

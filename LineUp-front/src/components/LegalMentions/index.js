/* eslint-disable max-len */
import React from 'react';

import './legalMentions.scss';

const LegalMentions = () => (
  <div className="legal-mentions-page-container">
    <h1 className="legal-mentions-title">
      Mentions légales
    </h1>
    <div className="legal-mentions-content">
      <div className="legal-mentions-editor">
        <h2>
          Editeur
        </h2>
        LineUp, Lorem au capital de 50 € ayant son siège social au 41 rue du Lorem à Ipsum (750ipsum), immatriculée sous le numéro xxx xxx xxx au RCS de Ipsum.
      </div>
      <div className="legal-mentions-director">
        <h2>
          Directeur de la publication
        </h2>
        Mr Ipsum Lorem
      </div>
      <div className="legal-mentions-contact">
        <h2>
          Adresse de courrier électronique et numéro de téléphone
        </h2>
        lineup.subscribe@gmail.com - 01.00.00.00.00
      </div>
      <div className="legal-mentions-host">
        <h2>
          Hébergeur du site
        </h2>
        Lorem SAS au capital de 800 000 € ayant son siège social au 63-65 boulevard Lorem à Ipsum (750ipsum), immatriculée sous le numéro xxx xxx xxx au RCS de Ipsum.
      </div>
      <div className="legal-mentions-cnil">
        <h2>
          Déclaration CNIL
        </h2>
        Conformément à la loi N°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, la société LineUp a fait l’objet d’une déclaration auprès de la CNIL sous le numéro d’enregistrement xxxxxxx
      </div>
    </div>
  </div>
);

export default LegalMentions;

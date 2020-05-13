DELIMITER $$
CREATE PROCEDURE PPN_S_DEPARTAMENTO (
    OUT R_CODIGO INTEGER, 
    OUT R_MENSAJE VARCHAR(100)
) 
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION 
	BEGIN
		GET DIAGNOSTICS CONDITION 1 R_CODIGO = RETURNED_SQLSTATE, R_MENSAJE = MESSAGE_TEXT;
		ROLLBACK;
	END;
START TRANSACTION;
	SET R_CODIGO = 1;
	SET R_MENSAJE = 'CONSULTA EXITOSA';
	
    SELECT D.ID, D.NOMBRE, D.UBIGEO, D.UBIGEO_RENIEC FROM DEPARTAMENTO D;
END$$

CREATE PROCEDURE PPN_S_PROVINCIA (
    IN I_ID_DEPARTAMENTO INT, 
    OUT R_CODIGO INTEGER, 
    OUT R_MENSAJE VARCHAR(100)
) 
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION 
	BEGIN
		GET DIAGNOSTICS CONDITION 1 R_CODIGO = RETURNED_SQLSTATE, R_MENSAJE = MESSAGE_TEXT;
		ROLLBACK;
	END;
START TRANSACTION;
	SET R_CODIGO = 1;
	SET R_MENSAJE = 'CONSULTA EXITOSA';
	SELECT D.ID, D.ID_DEPARTAMENTO, D.NOMBRE, D.UBIGEO, D.UBIGEO_RENIEC FROM PROVINCIA D WHERE D.ID_DEPARTAMENTO = I_ID_DEPARTAMENTO;
END$$

CREATE PROCEDURE PPN_S_DISTRITO (
    IN I_ID_PROVINCIA INT, 
    OUT R_CODIGO INTEGER, 
    OUT R_MENSAJE VARCHAR(100)
) 
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION 
	BEGIN
		GET DIAGNOSTICS CONDITION 1 R_CODIGO = RETURNED_SQLSTATE, R_MENSAJE = MESSAGE_TEXT;
		ROLLBACK;
	END;
START TRANSACTION;
	SET R_CODIGO = 1;
	SET R_MENSAJE = 'CONSULTA EXITOSA';
	SELECT D.ID, D.ID_PROVINCIA, D.NOMBRE, D.UBIGEO, D.UBIGEO_RENIEC FROM DISTRITO D WHERE D.ID_PROVINCIA = I_ID_PROVINCIA;
END$$

DELIMITER ;
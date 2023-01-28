module.exports = {
    register : async (req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Usuario Registrado'
            })

        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :false,
                msg : error.message || 'Ups, se ha detectado un error'
            })
        }
        
    },
    login : async (req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Usuario Logueado'
            })

        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :false,
                msg : error.message || 'Ups, se ha detectado un error'
            })
        }
        
    },
    checked : async (req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Usuario Checkeado'
            })

        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :false,
                msg : error.message || 'Ups, se ha detectado un error'
            })
        }
        
    },
    sendToken : async (req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Token enviado'
            })

        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :false,
                msg : error.message || 'Ups, se ha detectado un error'
            })
        }
        
    },
    verifyToken : async (req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Token verificado'
            })

        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :false,
                msg : error.message || 'Ups, se ha detectado un error'
            })
        }
        
    },
    changePassword : async (req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Password actualizado'
            })

        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :false,
                msg : error.message || 'Ups, se ha detectado un error'
            })
        }
        
    },
    
}
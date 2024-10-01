const users = [
    { id: 1, name: 'ewkop' },
    { id: 2, name: 'erkg' },
    { id: 3, name: 'rewo' },
  ];
const getUsers =(req,res) => {
    return res.json(users);};

    module.exports = {getUsers};
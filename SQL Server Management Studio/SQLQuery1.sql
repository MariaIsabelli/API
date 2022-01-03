select * from Pedidos

select * from PedidosItems

alter table PedidosItems add constraint fk_Pedido foreign key (CodigoPedido) references Pedido (Codigo)











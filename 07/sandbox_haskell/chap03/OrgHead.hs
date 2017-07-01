orgHead :: [a] -> a
orgHead [] = error "Can't call head on an empty list, dummy!"
orgHead (x:_) = x

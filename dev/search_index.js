var documenterSearchIndex = {"docs":
[{"location":"api/#API-Reference-1","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"api/#Elements-1","page":"API Reference","title":"Elements","text":"","category":"section"},{"location":"api/#","page":"API Reference","title":"API Reference","text":"Modules = [NNFEM]\nPages   = [\"FiniteStrainContinuum.jl\", \"FiniteStrainContinuum.jl\", \"FiniteStrainContinuum.jl\"]","category":"page"},{"location":"api/#Materials-1","page":"API Reference","title":"Materials","text":"","category":"section"},{"location":"api/#","page":"API Reference","title":"API Reference","text":"Modules = [NNFEM]\nPages   = [\"PlaneStress.jl\", \"PlaneStrain.jl\", \"PlaneStressIncompressibleRivlinSaunders.jl\",\n            \"PlaneStressPlasticity\"]","category":"page"},{"location":"api/#NNFEM.PlaneStressIncompressibleRivlinSaunders","page":"API Reference","title":"NNFEM.PlaneStressIncompressibleRivlinSaunders","text":"Pascon, João Paulo.  \"Large deformation analysis of plane-stress hyperelastic problems via triangular membrane finite elements.\"  International Journal of Advanced Structural Engineering (2019): 1-20.\n\n\n\n\n\n","category":"type"},{"location":"api/#Assembly-1","page":"API Reference","title":"Assembly","text":"","category":"section"},{"location":"api/#","page":"API Reference","title":"API Reference","text":"Modules = [NNFEM]\nPages   = [\"assembly.jl\", \"fem.jl\"]","category":"page"},{"location":"api/#NNFEM.assembleMassMatrix!-Tuple{GlobalData,Domain}","page":"API Reference","title":"NNFEM.assembleMassMatrix!","text":"compute constant mass matrix\ndue to the time-dependent Dirichlet boundary condition\nmass matrix = M,    MID\n              MID'  MDD\nsave M and MID and lump(M)\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.tfAssembleInternalForce-Tuple{Domain,Function,PyCall.PyObject,PyCall.PyObject,PyCall.PyObject,PyCall.PyObject}","page":"API Reference","title":"NNFEM.tfAssembleInternalForce","text":"domain   : finite element domain, for data structure\nnn: Neural network constitutive law, with \nE_all    : all strains for the current time-step, with size (neles*nGauss, nstrains)\nDE_all   : all strains for the last time-step, with size (neles*nGauss, nstrains)\nw∂E∂u_all: multiplication of the Gaussian weight and ∂E∂u^T for current time-step, \n           with size (neles*nGauss, ndofs_per_element, nstrains)\nσ0_all   : all stresses for the last time-step, with size (neles*nGauss, nstrains)\n\ncompute local internal force f_int and then assemble to F_int\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.Domain-Tuple{Array{Float64,N} where N,Array,Int64,Array{Int64,N} where N,Array{Float64,N} where N,Array{Int64,N} where N,Array{Float64,N} where N}","page":"API Reference","title":"NNFEM.Domain","text":"Creating a finite element domain\nnodes: n by 2 float 64, node coordinates\nelements: element list\nndims: 2\nEBC: n by 2 Int64, nodal Dirichlet boundary condition, -1 time-independent, -2 time-dependent\ng: n by 2 Float64, values for nodal time-independent Dirichlet boundary condition\nFBC: n by 2 Int64, nodal force boundary condition, -1 time-independent, -2 time-dependent\nf: n by 2 Float64, values for nodal force time independent force boundary condition\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.convertState-Tuple{Domain,Array{Float64,N} where N,String}","page":"API Reference","title":"NNFEM.convertState","text":":param self: Domain\n:param state : 1D array to convert\n:param compress_or_expand  : \"Compress\" or \"Expand\" \n\n\"Compress\", the state has all freedoms on all nodes, remove these freedoms on EBC\n\"Expand\",   the state has only active freedoms on active nodes (active means not prescribed), \n            set these freedoms on EBC to 0\n\n:return:\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.setGeometryPoints!-Tuple{Domain,Int64,Array{Int64,N} where N}","page":"API Reference","title":"NNFEM.setGeometryPoints!","text":":param npoints, the mesh contains npoints\n:node_to_point, a map from node to point, -1 means the node is not the geometry point\n:return:\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.setNeumannBoundary!-Tuple{Domain,Array{Int64,N} where N,Array{Float64,N} where N}","page":"API Reference","title":"NNFEM.setNeumannBoundary!","text":":param FBC[n, d] is the boundary condition of node n's dth freedom,\n    -1 means fixed force load boundary condition\n    -2 means time dependent force load boundary condition\n:param f[n, d] is the fixed force load value\n:return:\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.updateDomainStateBoundary!-Tuple{Domain,GlobalData}","page":"API Reference","title":"NNFEM.updateDomainStateBoundary!","text":"Update domain time dependent boundary information.\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.updateStates!-Tuple{Domain,GlobalData}","page":"API Reference","title":"NNFEM.updateStates!","text":":param disp: neqs array\n:param vel : neqs array\n\nupdate Dstate in Domain, update state in Domain\n:return:\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.assembleSparseMatrixPattern!-Tuple{Domain}","page":"API Reference","title":"NNFEM.assembleSparseMatrixPattern!","text":"compute constant stiff matrix pattern\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.getDofs-Tuple{Domain,Int64}","page":"API Reference","title":"NNFEM.getDofs","text":":param el_nodes: 1d array\n:return: the corresponding dofs ids, u0,u1, .., v0, v1, ..\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.getExternalForce!-Tuple{Domain,GlobalData,Array{Float64,N} where N}","page":"API Reference","title":"NNFEM.getExternalForce!","text":"the external force include the Dirichlet boundary condition effect\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.setDirichletBoundary!-Tuple{Domain,Array{Int64,N} where N,Array{Float64,N} where N}","page":"API Reference","title":"NNFEM.setDirichletBoundary!","text":":param EBC[n, d] is the boundary condition of of node n's dth freedom,\n    -1 means fixed Dirichlet boundary nodes\n    -2 means time dependent Dirichlet boundary nodes\n:param g[n, d] is the fixed Dirichlet boundary value\n\n:param nbc:\n:return:\n\n\n\n\n\n","category":"method"},{"location":"api/#Solvers-1","page":"API Reference","title":"Solvers","text":"","category":"section"},{"location":"api/#","page":"API Reference","title":"API Reference","text":"Modules = [NNFEM]\nPages   = [\"NNSolver.jl\", \"Solvers.jl\"]","category":"page"},{"location":"api/#NNFEM.DynamicMatLawLoss-Tuple{Domain,Array{Float64,N} where N,Array{Float64,N} where N,Array{Float64,N} where N,Function}","page":"API Reference","title":"NNFEM.DynamicMatLawLoss","text":"domain   : finite element domain, for data structure\nE_all    : all strains for the whole simulation, with size (NT+1, neles*nGauss, nstrains)\nw∂E∂u_all: multiplication of the Gaussian weight and ∂E∂u^T for the whole simulation, \n           with size (NT+1, neles*nGauss, ndofs_per_element, nstrains)\nF_tot : approximated internal force for the whole simulation, with size(NT, ndofs), \n        from time n=1 to time n=NT\n\nform the loss function, based on dynamic equilibrium \n    (Mddu + fint(NN, E, DE) + MIDddu_bc = fext\n\nloss = ∑ ||fint(NN, E, DE) - (fext - MIDddu_bc - Mddu)||^2\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.DynamicMatLawLoss-Union{Tuple{S}, Tuple{T}, Tuple{Domain,GlobalData,Array{T,N} where N,Array{S,N} where N,Function,Float64}} where S where T","page":"API Reference","title":"NNFEM.DynamicMatLawLoss","text":"domain   : finite element domain\nglobdat  : finite element data structure\nstate_history : displace history of all time steps and all nodes, \n                a list of NT+1  ndof-displacement vectors, including time 0\n                hcat(state_history...) gives a matrix of size(ndof-displacement, NT+1)\nfext_history  : external force load of all time steps and all nodes, \n                a list of NT+1 ndof-external-force vectors, including time 0\n                hcat(fext_history...) gives a matrix of size(ndof-external-force, NT+1)\nnn: Neural network\nΔt: time step size\n\ncompute loss function from state and external force history\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.LSfittingStress-Tuple{Domain,GlobalData,Array{Float64,N} where N,Array{Float64,N} where N,Float64,String}","page":"API Reference","title":"NNFEM.LSfittingStress","text":"LSfittingStress(domain::Domain, globdat::GlobalData, state_history::Array{Float64}, F_ext::Array{Float64},Δt::Float64, method::String)\n\nFor quadratic element, nx, ny, ... elements in each direction The number of equations are neqs ≈ 2(2nx + 1)(2ny + 1) Plan 1: Assume the stress in each element is constant, the number of unknows are 3nxny Plan 2: Assume the stress in each element is linear, the number of unknows are 3(nx+1)(ny+1) on each nodes\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.LSfittingStressHelper-Tuple{Any,Array{Float64,N} where N,String}","page":"API Reference","title":"NNFEM.LSfittingStressHelper","text":"Compute the stiff and dfintdstress, based on the state in domain and dstraindstate\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.preprocessing-Tuple{Domain,GlobalData,Array{Float64,N} where N,Float64,Int64}","page":"API Reference","title":"NNFEM.preprocessing","text":"preprocessing(domain::Domain, globdat::GlobalData, F_ext::Array{Float64},Δt::Float64, n::Int64)\n\nSame as preprocessing, except that only the first n steps are considered\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.preprocessing-Tuple{Domain,GlobalData,Array{Float64,N} where N,Float64}","page":"API Reference","title":"NNFEM.preprocessing","text":"compute F_tot ≈ F_int , ane E_all\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.AdaptiveSolver-NTuple{6,Any}","page":"API Reference","title":"NNFEM.AdaptiveSolver","text":"Adaptive Solver, adjust the time step, if this step fails, redo the step with half of\nthe time step size\n\nreturn globdat, domain\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.ExplicitSolver-Tuple{Any,Any,Any}","page":"API Reference","title":"NNFEM.ExplicitSolver","text":"ExplicitSolver(Δt, globdat, domain)\n\nCentral Difference Explicit solver for Ma + fint = fext, a, v, u are acceleration, velocity and displacement\n\nbeginalign\nu_n+1 = u_n + dtv_n + dt^22 a_n \nv_n+1 = v_n + dt2(a_n + a_n+1) \nM a_n+1 + C v_n+1 + R(u_n+1) = P_n+1 \n(M + dt2 C) a_n+1 = P_n+1 - R(u_n+1) - C(v_n + dt2 a_n) \nendalign\n\nAlternative, todo:\nM a_n + C v_n + R(u_n) = P_n\nM(u_{n+1} - 2u_n + u_{n-1}) + dt/2*C(u_{n+1} - u_{n-1}) + dt^2 R(u_n) = dt^2 P_n\n(M + dt/2 C) u_{n+1} = dt^2(P_n - R(u_n) + dt/2 C u_{n-1} + M(2u_n - u_{n-1})\n\nFor the first step\nu_{-1} = u_0 - dt*v_0 + dt^2/2 a_0\na_0 = M^{-1}(-Cv_0 - R(u_0) + P_0)\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.NewmarkSolver","page":"API Reference","title":"NNFEM.NewmarkSolver","text":"NewmarkSolver(Δt, globdat, domain, αm = -1.0, αf = 0.0, ε = 1e-8, ε0 = 1e-8, maxiterstep=100, η = 1.0, failsafe = false)\n\nImplicit solver for Ma + C v + R(u) = P a, v, u are acceleration, velocity and displacement respectively.\n\nu_n+1 = u_n + dtv_n + dt^22 ((1 - 2beta)a_n + 2beta a_n+1)\nv_n+1 = v_n + dt((1 - gamma)a_n + gamma a_n+1)\n\nM a_n+05 + f_mathrmint(u_n+0f) = fext_n+05\n\nαm = (2\\rho_oo - 1)/(\\rho_oo + 1)\nαf = \\rho_oo/(\\rho_oo + 1)\n\nβ2 = 0.5*(1 - αm + αf)^2\nγ = 0.5 - αm + αf\n\nabsolution error ε = 1e-8, \nrelative error ε0 = 1e-8  \n\nreturn true or false indicating converging or not\n\n\n\n\n\n","category":"function"},{"location":"api/#NNFEM.StaticSolver","page":"API Reference","title":"NNFEM.StaticSolver","text":"StaticSolver(globdat, domain, loaditerstep = 10, ε = 1.e-8, maxiterstep=100)\n\nImplicit solver for \n\nf_mathrmint(u) = f_mathrmext\n\nu is the displacement. We apply the Newton-Raphson algorithm\n\nu_n+1 = u_n -  nabla f_mathrmint(u^n)^-1 *( f_mathrmint(u^n) -  f_mathrmext)\n\n\n\n\n\n","category":"function"},{"location":"api/#Utilities-1","page":"API Reference","title":"Utilities","text":"","category":"section"},{"location":"api/#","page":"API Reference","title":"API Reference","text":"Modules = [NNFEM]\nPages   = [\"io.jl\", \"matrix.jl\", \"shapeFunctions\", \"Testsuit.jl\", \"Visualize.jl\"]","category":"page"},{"location":"api/#NNFEM.orthotropic_H-Tuple{PyCall.PyObject}","page":"API Reference","title":"NNFEM.orthotropic_H","text":"orthotropic_H(y::PyObject)\northotropic_H(o::Array)\n\nCreates a symmetric matrix from 4 parameters\n\nH = beginbmatrix\ny_1  y_2  0 \ny_2  y_3  0  \n0  0  y_4\nendbmatrix\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.spd_Chol_Orth-Tuple{Array}","page":"API Reference","title":"NNFEM.spd_Chol_Orth","text":"spd_Chol_Orth(o::Array)\nspd_Chol_Orth(o::PyObject)\n\nCreates a SPD matrix from 4 scalars. \n\nA = LL\n\nwhere\n\nL = beginbmatrix\no_1   \no_2  o_3  \n    o_4 \nendbmatrix\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.spd_Cholesky-Tuple{Array}","page":"API Reference","title":"NNFEM.spd_Cholesky","text":"spd_Cholesky(o::Array)\nspd_Cholesky(o::PyObject)\n\nCreates a SPD matrix from 6 scalars. \n\nA = LL\n\nwhere\n\nL = beginbmatrix\no_1    \no_2  o_4  \no_3  o_5  o_6 \nendbmatrix\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.spd_H-Tuple{PyCall.PyObject,Array{Float64,2}}","page":"API Reference","title":"NNFEM.spd_H","text":"spd_H(o::PyObject, H0::Array{Float64,2})\nspd_H(o::Array, H0::Array)\n\nCreates a SPD matrix from 3 scalars\n\nH = H_0 - fracH_0nnH_01+nH_0n\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.spd_zero_to_H-Tuple{PyCall.PyObject,Array{Float64,2}}","page":"API Reference","title":"NNFEM.spd_zero_to_H","text":"spd_zero_to_H(o::Array)\nspd_zero_to_H(o::Array, H0inv::Array{Float64,2})\n\nCreates a SPD matrix from 4 scalars. \n\nA = (H_0^-1 +LL)^-1\n\nwhere\n\nL =  beginbmatrix\no_1   \no_2  o_3  \n    o_4\nendbmatrix\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.sym_H-Tuple{PyCall.PyObject}","page":"API Reference","title":"NNFEM.sym_H","text":"sym_H(y::PyObject)\nsym_H(o::Array)\n\nCreates a symmetric matrix from 6 parameters\n\nH = beginbmatrix\ny_1  y_2  y_3 \ny_2  y_4  y_5  \ny_3  y_5  y_6\nendbmatrix\n\n\n\n\n\n","category":"method"},{"location":"api/#NNFEM.gradtest-Tuple{Function,Array{Float64,N} where N}","page":"API Reference","title":"NNFEM.gradtest","text":"gradtest(f::Function, x0::Array{Float64}; scale::Float64 = 1.0)\n\nTesting the gradients of a vector function f. \n\n\n\n\n\n","category":"method"},{"location":"instructions/#Instructions-for-Running-Benchmarks-1","page":"Instructions for Running Benchmarks","title":"Instructions for Running Benchmarks","text":"","category":"section"},{"location":"instructions/#Plate/MustiScale2-1","page":"Instructions for Running Benchmarks","title":"Plate/MustiScale2","text":"","category":"section"},{"location":"instructions/#","page":"Instructions for Running Benchmarks","title":"Instructions for Running Benchmarks","text":"Generate Data with GenerateData.sh. \nPretrain NN with Linear Models","category":"page"},{"location":"instructions/#","page":"Instructions for Running Benchmarks","title":"Instructions for Running Benchmarks","text":"julia NNPreLSfit.jl","category":"page"},{"location":"instructions/#","page":"Instructions for Running Benchmarks","title":"Instructions for Running Benchmarks","text":"Check NNPreLSfit.jl results","category":"page"},{"location":"instructions/#","page":"Instructions for Running Benchmarks","title":"Instructions for Running Benchmarks","text":"julia Adj_Loss.jl","category":"page"},{"location":"instructions/#","page":"Instructions for Running Benchmarks","title":"Instructions for Running Benchmarks","text":"","category":"page"},{"location":"plasticity/#Plasticity-1","page":"Plasticity","title":"Plasticity","text":"","category":"section"},{"location":"plasticity/#","page":"Plasticity","title":"Plasticity","text":"We generate 10 sets of data for training the neural network (100, 101, 102, 103, 104, 200, 201, 202, 203, 204), 4 sets of data for validating (105, 106, 205, 206) and 1 set of data for testing (300). The setting are as follows (the arrows represents force direction but may indicate different force magnitude; the shaded area indicates fixed sides). ","category":"page"},{"location":"plasticity/#","page":"Plasticity","title":"Plasticity","text":"(Image: )","category":"page"},{"location":"plasticity/#","page":"Plasticity","title":"Plasticity","text":"(Image: )","category":"page"},{"location":"plasticity/#","page":"Plasticity","title":"Plasticity","text":"(Image: )","category":"page"},{"location":"#Getting-Started-1","page":"Getting Started","title":"Getting Started","text":"","category":"section"},{"location":"#Motivation-1","page":"Getting Started","title":"Motivation","text":"","category":"section"},{"location":"#","page":"Getting Started","title":"Getting Started","text":"Plasticity material has been described with different strain-stress relation models. However, these models are usually derived ad hoc and may not reflect the plasticity properties of new materials. The models describe the so-called strain-stress relations; for plasticity strain-stress relations, the current stress depends on the historic strains and stresses. ","category":"page"},{"location":"#","page":"Getting Started","title":"Getting Started","text":"Data-driven approaches to discover the strain-stress relations are promising to produce more accurate phenomenonial plasticity models. However, one limitation to the data we can collect is that stress are usually not directly observable. Therefore, obvious machine learning techniques that use curve-fitting methods to reconstruct the strain-stress relations (i.e., strain as inputs, stress as outputs) are not applicable in practice. ","category":"page"},{"location":"#","page":"Getting Started","title":"Getting Started","text":"The mission of NNFEM is to solve this types of problem by combining finite element analysis and deep neural networks for data-driven modeling of plasticity.","category":"page"},{"location":"#Problem-Formulation-1","page":"Getting Started","title":"Problem Formulation","text":"","category":"section"},{"location":"#","page":"Getting Started","title":"Getting Started","text":"The observation data are time series of the displacements Gaussian points of each finite element in a 2D plasticity material u_i^nin mathbbR i=12ldotsn_gp where n denotes time step, i denotes the index of n_gp points.","category":"page"},{"location":"#","page":"Getting Started","title":"Getting Started","text":"Consequently the strain varepsilon_i^n at any time can deduced; however, the stress sigma_i^n is not observed. The task is to model the strain-stress relationship for the material sigma = f(sigma_0 varepsilon_0 varepsilon Delta t) where sigma_0 and varepsilon_0 are strain and stress at previous time step, varepsilon is the current strain, and Delta t is the time interval. sigma is the predicted strain. ","category":"page"},{"location":"#","page":"Getting Started","title":"Getting Started","text":"In addition, we assume we know the external force f_iext^n, which is usually designed by experimentalist. ","category":"page"},{"location":"#","page":"Getting Started","title":"Getting Started","text":"Our goal is to contruct a deep neural network model f that can reproduces the displacements data u_i^n. Particularly, the following are a few important validations for our approach","category":"page"},{"location":"#","page":"Getting Started","title":"Getting Started","text":"Loading and unloading should be predicted accurately by our model.\nDisplacements with unseen external loads should be predicted by our model (generalization).\nStress estimation should be not far from ground truth (accuracy).","category":"page"},{"location":"#Methodology-1","page":"Getting Started","title":"Methodology","text":"","category":"section"},{"location":"#","page":"Getting Started","title":"Getting Started","text":"Our methodology is to formulate the internal force with finite element methods F_j int^n=G(u_i^k_kleq n ileq n_gp w) where w is the weights of the neural network f. ","category":"page"},{"location":"#","page":"Getting Started","title":"Getting Started","text":"The contribution of the external force  to each element is also computed F_j ext^n.","category":"page"},{"location":"#","page":"Getting Started","title":"Getting Started","text":"We solve the following minimization problem  min_w sum_n=12ldot i=12ldots n_gpleft( F_j int^n - F_j ext^n right)","category":"page"}]
}
